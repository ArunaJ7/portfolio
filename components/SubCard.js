import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const SubCard = ({ title, icons }) => {
  return (
    <Card sx={{ backgroundColor: '#19647e', margin: '16px', borderRadius: '16px', flex: '1 1 30%', maxWidth: '45%', border: '0.5px solid red', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <div className="text-white font-bold mb-4" style={{textAlign: 'center'}}>{title}</div>
        <div className="flex flex-wrap gap-2">
          {icons.map((iconItem, itemIndex) => (
            <div key={itemIndex} className="flex items-center justify-center text-white border border-white rounded-md p-2">
              <div className="text-2xl mr-3 w-6 h-6 flex items-center justify-center">{iconItem.icon}</div>
              <div className="overflow-hidden whitespace-nowrap text-sm flex items-center justify-center">{iconItem.name}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SubCard;