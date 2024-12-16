import React from 'react';
import { IoMdDownload } from "react-icons/io";
export const Card = () => {
    const data = [
  {
    "teamName": "Team 1",
    "button": {
  
      "style": "bg-[purple] text-white px-[10px] py-[5px] rounded-lg"
    },
    "theme": "Theme 1",
    "students": ["Student-1", "Student-2", "Student-3", "Student-4"],
    "scores": {
      "round-1": 85,
      "round-2": 90,
      "round-3": 95
    }
  },
  {
    "teamName": "Team 2",
    "button": {
  
      "style": "bg-[purple] text-white px-[10px] py-[5px] rounded-lg"
    },
    "theme": "Theme 1",
    "students": ["Student-5", "Student-6", "Student-7", "Student-8"],
    "scores": {
      "round-1": 75,
      "round-2": 80,
      "round-3": 85
    }
  },
  {
    "teamName": "Team 3",
    "button": {
  
      "style": "bg-[purple] text-white px-[10px] py-[5px] rounded-lg"
    },
    "theme": "Theme 1",
    "students": ["Student-9", "Student-10", "Student-11", "Student-12"],
    "scores": {
      "round-1": 90,
      "round-2": 92,
      "round-3": 94
    }
  },
  {
    "teamName": "Team 4",
    "button": {
  
      "style": "bg-[purple] text-white px-[10px] py-[5px] rounded-lg"
    },
    "theme": "Theme 1",
    "students": ["Student-13", "Student-14", "Student-15", "Student-16"],
    "scores": {
      "round-1": 78,
      "round-2": 80,
      "round-3": 82
    }
  },
  {
    "teamName": "Team 5",
    "button": {
  
      "style": "bg-[purple] text-white px-[10px] py-[5px] rounded-lg"
    },
    "theme": "Theme 1",
    "students": ["Student-17", "Student-18", "Student-19", "Student-20"],
    "scores": {
      "round-1": 88,
      "round-2": 91,
      "round-3": 90
    }
  },
  {
    "teamName": "Team 5",
    "button": {
  
      "style": "bg-[purple] text-white px-[10px] py-[5px] rounded-lg"
    },
    "theme": "Theme 1",
    "students": ["Student-17", "Student-18", "Student-19", "Student-20"],
    "scores": {
      "round-1": 88,
      "round-2": 91,
      "round-3": 90
    }
  },
  {
    "teamName": "Team 5",
    "button": {
      "text": "Download",
      "style": "bg-[purple] text-white px-[10px] py-[5px] rounded-lg"
    },
    "theme": "Theme 1",
    "students": ["Student-17", "Student-18", "Student-19", "Student-20"],
    "scores": {
      "round-1": 88,
      "round-2": 91,
      "round-3": 90
    }
  },
  {
    "teamName": "Team 5",
    "button": {
  
      "style": "bg-[purple] text-white px-[10px] py-[5px] rounded-lg"
    },
    "theme": "Theme 1",
    "students": ["Student-17", "Student-18", "Student-19", "Student-20"],
    "scores": {
      "round-1": 88,
      "round-2": 91,
      "round-3": 90
    }
  },
  {
    "teamName": "Team 5",
    "button": {
    
      "style": "bg-[purple] text-white px-[10px] py-[5px] rounded-lg"
    },
    "theme": "Theme 1",
    "students": ["Student-17", "Student-18", "Student-19", "Student-20"],
    "scores": {
      "round-1": 88,
      "round-2": 91,
      "round-3": 90
    }
  },
  {
    "teamName": "Team 5",
    "button": {
    
      "style": "bg-[purple] text-white px-[10px] py-[5px] rounded-lg"
    },
    "theme": "Theme 1",
    "students": ["Student-17", "Student-18", "Student-19", "Student-20"],
    "scores": {
      "round-1": 88,
      "round-2": 91,
      "round-3": 90
    }
  },
];


  return (
    <div className='flex flex-wrap justify-center xl:justify-between gap-[20px] p-[20px]'>
      {data.map((item, index) => (
        <div key={index} className='md:h-[230px] md:w-[500px] bg-[white] rounded-md border-[1px] shadow-lg p-[20px]'>
          <div className='flex justify-between'>
            <h1 className='text-[24px] font-bold'>{item.teamName}</h1>
         
              <button className={item.button.style} key={index}>
              <h1 className='flex items-center gap-2'><IoMdDownload />Download</h1></button>
          
          </div>
          <h2 className='text-[20px] mt-[10px]'>Theme: {item.theme}</h2>
          <div className='flex justify-between flex-wrap gap-[20px]'>
          <ul className='list-none mt-[10px]'>
            {item.students.map((student, i) => (
              <li key={i}>{student}{i}</li>
            ))}
          </ul>
          <div className="scores w-[250px] ">
          <ul className='list-none flex flex-col gap-[5px]'>
            <li className='p-1  font-bold  rounded-lg'>Round 1: {item.scores['round-1']}</li>
            <li className='p-1  font-bold  rounded-lg'>Round 2: {item.scores['round-2']}</li>
            <li className='p-1  font-bold  rounded-lg'>Round 3: {item.scores['round-3']}</li></ul>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};
