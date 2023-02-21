import React, {useState, useEffect} from 'react';

export const Timer = () =>{
        const buttons = ["start","up","down","reset","stop"]
        const[display, setDisplay] = useState(0)
        const[input, setInput] = useState(0);
        const[playing, setPlaying] = useState(false)



        useEffect(()=>{
                const intervalId = setInterval(()=>{
                        calculateDisplay();
                }, 1000)
                return ()=> {clearInterval(intervalId)};

                        }, )




        const calculateDisplay = () =>{


                if(playing)
                {
                        setDisplay(display => display + 1)
                }

                if(display == (input * 12 * 5)){
                        let audio = new Audio("https://cdn.pixabay.com/audio/2022/03/15/audio_9b106fb911.mp3")
                        setPlaying(false);
                        audio.play()



                }



        }




        const   handleClick     =       (prop)  =>{
                switch(prop){
                        case ("start"):
                                setPlaying(true);
                                break;
                        case("stop"):
                                setPlaying(false);
                                break;
                        case("up"):
                                setInput(input =>  input + 5);
                                break;
                        case("down"):
                                setInput(input => input - 5)
                                break;
                        case("reset"):
                                setInput(input => 0)
                                break;
                        default:
                                console.error(prop)
                                break;
                }
        }

        return(
                <div>

                <div>
                <h1>timer</h1>
                <ul>
                {buttons.map((value, index) => (
                        <li key={index} prop={value}>
                        <button
                        onClick={() => handleClick(value)}>
                        {value}
                        </button>
                        </li>)
                )}
                </ul>
                </div>




                <div>
                {input}
                {"  mins till alarm"}
                </div>

                <div>
                {display}
                {"  seconds passed"}
                </div>

                </div>

        )

}
