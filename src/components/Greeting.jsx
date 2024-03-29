import { useState } from 'preact/hooks';

export default function Greeting({size}) {

    const [ s, setSize ] = useState(size);

    const [ finalGif, setFinalGif ] = useState(false);

    const messages = ["Hi 1", "Hello 2", "Howdy 3", "Hey there 4"];

    const [index, setIndex] = useState(0);

    const [message, setMessage] = useState(messages[index]);

  const remessage = () => {
    if (index >= messages.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    setMessage(messages[index]);
  };


  const resize = () => {
    setSize(Number(s) + 10); // Increase button size by 10
  };

  return (
    <div class="flex flex-col space-y-4 items-center">
        {!finalGif && 
            <img src="https://i.giphy.com/ZgYBhq1x7L1bW.webp" alt="Description of the image"></img>
        }
        {finalGif && 
            <img src="https://i.giphy.com/z26cyfYb0XFNRuiWjf.webp" alt="Description of the image"></img>
        }
                    
        {/* <h3>{s}! </h3> */}

        <div class="flex space-x-4 items-center" >


            <button onClick={() => { setFinalGif(true) }}
                style={{ height: s, width: s*2 }} 
                class="btn-one bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
            >
                Button
            </button>
            <button onClick={() => { resize(); remessage(); }}
                class="btn-two bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-16 w-32"
            >
                {message}
            </button>
        </div>
    </div>
    

//     <style>
//   .btn {
//     @apply font-bold py-2 px-4 rounded;
//   }
//   .btn-blue {
//     @apply bg-blue-500 text-white;
//   }
//   .btn-blue:hover {
//     @apply bg-blue-700;
//   }
// </style>
    
  );
}