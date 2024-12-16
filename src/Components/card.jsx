import React from 'react';
import { IoMdDownload } from "react-icons/io";
export const Card = () => {
  const data = [
    {
      "teamName": "Innovators",
      "button": {
        "style": "bg-[purple] text-white px-[10px] py-[5px] rounded-lg"
      },
      "theme": "Mess Monitoring",
      "students": ["Aarav", "Ananya", "Rohan", "Isha"],
      "scores": {
        "round-1": 85,
        "round-2": 90,
        "round-3": 95
      }
    },
    {
      "teamName": "Trailblazers",
      "button": {
        "style": "bg-[purple] text-white px-[10px] py-[5px] rounded-lg"
      },
      "theme": "Addressing Sexual Harassment at the Workplace",
      "students": ["Vihaan", "Priya", "Arjun", "Meera"],
      "scores": {
        "round-1": 75,
        "round-2": 80,
        "round-3": 85
      }
    },
    {
      "teamName": "Visionaries",
      "button": {
        "style": "bg-[purple] text-white px-[10px] py-[5px] rounded-lg"
      },
      "theme": "Mess Monitoring",
      "students": ["Dev", "Kavya", "Ishaan", "Neha"],
      "scores": {
        "round-1": 90,
        "round-2": 92,
        "round-3": 94
      }
    },
    {
      "teamName": "Pioneers",
      "button": {
        "style": "bg-[purple] text-white px-[10px] py-[5px] rounded-lg"
      },
      "theme": "Addressing Sexual Harassment at the Workplace",
      "students": ["Kabir", "Sanya", "Raj", "Aditi"],
      "scores": {
        "round-1": 78,
        "round-2": 80,
        "round-3": 82
      }
    },
    {
      "teamName": "Achievers",
      "button": {
        "style": "bg-[purple] text-white px-[10px] py-[5px] rounded-lg"
      },
      "theme": "Mess Monitoring",
      "students": ["Yash", "Diya", "Karan", "Simran"],
      "scores": {
        "round-1": 88,
        "round-2": 91,
        "round-3": 90
      }
    },
   
      {
        "teamName": "Innovative Warriors",
        "button": {
          "style": "bg-[purple] text-white px-[10px] py-[5px] rounded-lg"
        },
        "theme": "Mess Monitoring",
        "students": ["Aditya", "Anusha", "Raghav", "Ishita"],
        "scores": {
          "round-1": 85,
          "round-2": 90,
          "round-3": 95
        }
      },
      {
        "teamName": "Trailblazing Minds",
        "button": {
          "style": "bg-[purple] text-white px-[10px] py-[5px] rounded-lg"
        },
        "theme": "Addressing Sexual Harassment at the Workplace",
        "students": ["Vikram", "Pallavi", "Arun", "Madhuri"],
        "scores": {
          "round-1": 75,
          "round-2": 80,
          "round-3": 85
        }
      },
      {
        "teamName": "Creative Visionaries",
        "button": {
          "style": "bg-[purple] text-white px-[10px] py-[5px] rounded-lg"
        },
        "theme": "Mess Monitoring",
        "students": ["Harsha", "Keerthi", "Rajesh", "Shravani"],
        "scores": {
          "round-1": 90,
          "round-2": 92,
          "round-3": 94
        }
      },
      {
        "teamName": "Pioneering Champs",
        "button": {
          "style": "bg-[purple] text-white px-[10px] py-[5px] rounded-lg"
        },
        "theme": "Addressing Sexual Harassment at the Workplace",
        "students": ["Karthik", "Sindhura", "Manoj", "Aparna"],
        "scores": {
          "round-1": 78,
          "round-2": 80,
          "round-3": 82
        }
      },
      {
        "teamName": "Achieving Stars",
        "button": {
          "style": "bg-[purple] text-white px-[10px] py-[5px] rounded-lg"
        },
        "theme": "Mess Monitoring",
        "students": ["Yashwanth", "Divya", "Ramesh", "Supriya"],
        "scores": {
          "round-1": 88,
          "round-2": 91,
          "round-3": 90
        }
      },
      {
        "teamName": "Innovative Pioneers",
        "button": {
          "style": "bg-[purple] text-white px-[10px] py-[5px] rounded-lg"
        },
        "theme": "Addressing Sexual Harassment at the Workplace",
        "students": ["Suresh", "Radha", "Arvind", "Gayathri"],
        "scores": {
          "round-1": 89,
          "round-2": 92,
          "round-3": 93
        }
      },
      {
        "teamName": "Bright Explorers",
        "button": {
          "style": "bg-[purple] text-white px-[10px] py-[5px] rounded-lg"
        },
        "theme": "Addressing Sexual Harassment at the Workplace",
        "students": ["Srinivas", "Lakshmi", "Vivek", "Deepika"],
        "scores": {
          "round-1": 84,
          "round-2": 89,
          "round-3": 87
        }
      },
      {
        "teamName": "Inspiring Thinkers",
        "button": {
          "style": "bg-[purple] text-white px-[10px] py-[5px] rounded-lg"
        },
        "theme": "Mess Monitoring",
        "students": ["Anil", "Bhavana", "Kiran", "Sowmya"],
        "scores": {
          "round-1": 82,
          "round-2": 88,
          "round-3": 85
        }
      },
      {
        "teamName": "Visionary Planners",
        "button": {
          "style": "bg-[purple] text-white px-[10px] py-[5px] rounded-lg"
        },
        "theme": "Addressing Sexual Harassment at the Workplace",
        "students": ["Satya", "Tejaswi", "Naveen", "Harini"],
        "scores": {
          "round-1": 86,
          "round-2": 87,
          "round-3": 90
        }
      },
      {
        "teamName": "Dynamic Achievers",
        "button": {
          "style": "bg-[purple] text-white px-[10px] py-[5px] rounded-lg"
        },
        "theme": "Mess Monitoring",
        "students": ["Varun", "Priyanka", "Ajay", "Sravya"],
        "scores": {
          "round-1": 80,
          "round-2": 85,
          "round-3": 88
        }
      },
     
    ];
    
   
  
  

  return (
    <div className='flex flex-wrap justify-center xl:justify-between gap-[20px]  md:p-[20px]'>
      {data.map((item, index) => (

        <div
  key={index}
  className='md:h-[250px] md:w-[500px] bg-white/70 backdrop-blur-2xl rounded-md border-[1px] border-white/30 shadow-lg p-[10px] md:p-[20px]'
>          <div className='flex justify-between'>
            <h1 className='text-[24px] font-bold'>{item.teamName}</h1>
         
              <button className={item.button.style} key={index}>
              <h1 className='flex items-center gap-2'><IoMdDownload />Download</h1></button>
          
          </div>
          <h2 className='text-[20px] mt-[10px]'>Theme: {item.theme}</h2>
          <div className='flex justify-between flex-wrap gap-[20px]'>
          <ul className='list-none mt-[10px]'>
            {item.students.map((student, i) => (
              <li key={i} className='flex'>Student {i+1} : <h1 className='font-bold px-[10px]'>{student}</h1></li>
            ))}
          </ul>
          <div className="scores w-[250px] md:p-[10px]">
          <ul className='list-none flex flex-col gap-[5px] md:items-end'>
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
