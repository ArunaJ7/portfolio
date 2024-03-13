import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';

import { HtmlIcon } from "../../components/Skills/HtmlIcon"; 
import { CssIcon } from "../../components/Skills/CssIcon";
import { JsIcon } from "../../components/Skills/JsIcon";
import { ReactIcon } from "../../components/Skills/ReactIcon";
import { BtStrapIcon } from "../../components/Skills/BtStrapIcon"; 
import { TailwindIcon } from "../../components/Skills/TailwindIcon";
import { PhpIcon } from "../../components/Skills/PhpIcon";
import { NodeIcon } from "../../components/Skills/NodeIcon";
import { JavaIcon } from "../../components/Skills/JavaIcon";
import { PythonIcon } from "../../components/Skills/PythonIcon";
import { ExpressIcon } from "../../components/Skills/ExpressIcon";
import { CIcon } from "../../components/Skills/CIcon";
import { Cpp } from "../../components/Skills/Cpp";
import { Kotlin } from "../../components/Skills/Kotlin";
import { R } from "../../components/Skills/R";
import { SqlIcon } from "../../components/Skills/SqlIcon";
import { Mongo } from "../../components/Skills/Mongo";
import { Firebase, FirebaseIcon } from "../../components/Skills/FirebaseIcon";
import { Figma } from "../../components/Skills/Figma";
import { Git } from "../../components/Skills/Git";
import { Github } from "../../components/Skills/Github";
import { Postman } from "../../components/Skills/Postman";
import { Androidstudio } from "../../components/Skills/AndroidStudio";
import { Vscode } from "../../components/Skills/Vscode";
import { PowerBi } from "../../components/Skills/PowerBi";
import { Arduino } from "../../components/Skills/Arduino";

  

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Front-end',
        icons: [
          {icon: <HtmlIcon />, name:'HTML'},
          {icon: <CssIcon />, name:'CSS'},
          { icon: <JsIcon/>, name: 'JavaScript' },
          { icon: <ReactIcon/>, name: 'React' },
          { icon: <BtStrapIcon/>, name: 'Bootstrap' },
          { icon: <TailwindIcon/>, name: 'Tailwind CSS' },
        ],
      },
      {
        title: 'Back-end',
        icons: [
          { icon: <PhpIcon/>, name: 'PHP' },
          { icon: <NodeIcon/>, name: 'Node.js' },
          { icon: <JavaIcon/>, name: 'Java' },
          { icon: <PythonIcon/>, name: 'Python' },
          { icon: <ExpressIcon/>, name: 'Express.js' },
          { icon: <CIcon/>, name: 'C' },
          { icon: <Cpp/>, name: 'C++' },
          { icon: <Kotlin/>, name: 'Kotlin' },
          { icon: <R/>, name: 'R' }
        ],
      },
      {
        title: 'Database',
        icons: [
          { icon: <SqlIcon/>, name: 'Sql'},
          { icon: <Mongo/>, name: 'MongoDB' },
          
        ],
      },
      {
        title: 'Tools',
        icons: [
          { icon: <Figma/>, name: 'Figma' },
          { icon: <Git/>, name: 'Git' },
          { icon: <Github/>, name: 'Github' },
          { icon: <Postman/>, name: 'Postman' },
          { icon: <Androidstudio/>, name: "Android Studio" },
          { icon: <Vscode/>, name: 'VS Code' },
          { icon: <Arduino />, name: 'Arduino' }
        ],
      },
    ],
  },
  {
    title: 'achievements',
    info: [
      {
        title: 'Sololearn introduction to Java course'
        
      },
      {
        title: 'Sololearn introduction to Java course',
        stage: '2009 - 2010',
      },
      {
        title: 'Great Learning SQL Project for Beginners course',
        stage: '2009 - 2010',
      },
      {
        title: 'Great Learning Introduction to Design Thinking course',
        
      },
    ],
  },

 
];

// components
import Avatar from "../../components/Avatar";
import Circles from '../../components/Circles';

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-right">
      <Circles />
      {/* avatar img */}
      <motion.div 
        variants={fadeIn('right', 0.2)} 
        initial='hidden' 
        animate='show' 
        exit='hidden' 
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
          <Avatar />
      </motion.div>

      

      <Card sx={{ minWidth: 275 }} className="bg-black/10" >
        <CardContent>
          {/* <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 justify-center">
            text */}
          

            {/* info */}
            <motion.div 
              variants={fadeIn('left', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
              <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
                {aboutData.map((item, itemIndex) => {
                  return (
                    <div 
                      key={itemIndex}
                      className={`${
                        index === itemIndex &&
                        'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                      }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] 
                      after:bg-white after:absolute after:-bottom-1 after:left-0`}
                      onClick={() => setIndex(itemIndex)}
                    >
                      {item.title}
                    </div>
                  );
                })}
              </div>
              <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center 
              xl:items-start">
                {aboutData[index].info.map((item, itemIndex)=> {
                  return (
                    <div 
                      key={itemIndex}
                      className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2
                      items-center text-white/60"
                    >
                      {/* title */}
                      <div className="font-light mb-2 md:mb-0">Front-end</div>
                      <div className="hidden md:flex">-</div>
                      <div>{item.stage}</div>
                      <div className="flex gap-x-4">
                        {/* icons */}
                        {item.icons?.map((iconItem, itemIndex) => {

                      

                          return (
                            <div key={itemIndex} className={`flex items-center gap-2 text-white border border-white rounded-md p-2 `}>
                              <div className="text-2xl ">{iconItem.icon}</div>
                              <div className="overflow-hidden whitespace-nowrap">{iconItem.name}</div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          {/* </div> */}
        </CardContent>
      </Card>
      
    </div>
  );
};

export default About;
