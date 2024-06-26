import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({exerciseDetail}) => {
  const { bodyPart, gifUrl, name, target, equipment, instructions } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack gap={"60px"} sx={{
      flexDirection : {
        lg: 'row'
      },
      p:'20px',
      alignItems: 'center',
    }}>
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
      <Stack sx={{
        gap: {
          lg: '35px',
          xs: '20px'
        }
      }}>
        <Typography variant='h3'>
          {name && name.charAt(0).toUpperCase() + name.slice(1)}
        </Typography>
        <ol>
    {instructions && instructions.map((instruction, index) => (
      <Typography component="li" key={index} variant='h6'>
        {instruction}
      </Typography>
    ))}
  </ol>
  {extraDetail?.map((item, index) => (
          <Stack key={index} direction="row" gap="24px" alignItems="center">
            <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
              <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
            </Button>
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail