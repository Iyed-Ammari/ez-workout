import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
// Import 'formatDate' from '@fullcalendar/core' instead of '@fullcalendar/react'
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Navigate, useNavigate } from "react-router-dom";
const Calendar = () => {
  const navigate = useNavigate();
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Stack direction={'column'}>
    <IconButton
              variant="contained"
              color="error"
              sx={{
                color: "white",
                backgroundColor: "#FF2625",
                width: "48px",
                height: "48px",
                margin: '20px'
              }}
              onClick={() => {
                navigate("/home");
              }}
            >
              <ArrowBackIcon />
            </IconButton>
    <Box
      m="20px"
      sx={{
        backgroundColor: "#fffafb",
      }}
    >
      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          backgroundColor={"#DDDDDD"}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Exercises</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: "#ff2625",
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  sx={{ color: "white" }}
                  primary={
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      {event.title}
                    </Typography>
                  }
                  secondary={
                    <Typography sx={{ color: "white" }}>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[ ]}
          />
        </Box>
      </Box>
    </Box>
    </Stack>
  );
};

export default Calendar;
