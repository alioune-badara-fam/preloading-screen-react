import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Link } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <Link to={'contact'}>
          <button>
            Go to contact page
          </button>
        </Link>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur sunt distinctio dignissimos eaque, officiis est. Voluptates officia dolorem magni doloremque. Alias dicta odio, porro consequuntur ipsum ratione placeat iure eaque ea, incidunt omnis impedit et odit ipsa magni. Facere ut soluta optio iusto, asperiores maxime veniam earum pariatur autem quae nam dicta ipsum voluptate repellat tempore sapiente consequuntur modi dolor sunt, magnam reprehenderit atque doloremque natus sed? Nihil ut laudantium repellendus quod quasi velit atque ad id perferendis obcaecati praesentium asperiores possimus dignissimos maxime laboriosam tempora illo, cumque deleniti fugit qui reprehenderit tempore illum. Odit debitis suscipit animi velit repellat unde error itaque voluptas officiis maxime eos accusantium libero dolor vel ipsa, esse ipsam provident neque blanditiis amet quia harum. Voluptas qui repudiandae, inventore maxime eveniet fugit velit. Quo id magnam deleniti ad unde ratione neque laudantium quidem, sequi placeat iure optio deserunt doloremque officia dolores quam. Explicabo voluptate voluptates, et rem repudiandae laborum ab omnis praesentium unde nam, quod ut assumenda. Sequi aspernatur dolores repellat error libero laudantium odit impedit vel vero magni earum nihil unde quia praesentium, dolore optio perspiciatis quas non nostrum quam iure! Non dolorum obcaecati laboriosam tempora voluptatem doloremque ex molestiae delectus maxime eum, iure corporis fugiat quidem iusto quo iste labore dolores excepturi tenetur temporibus, harum nobis veniam, rerum modi. Aspernatur obcaecati suscipit temporibus architecto rem soluta iure quia autem, itaque natus delectus rerum maxime voluptates earum dolor, doloribus sunt quae id est doloremque quaerat? Molestias consequuntur quidem eligendi accusantium voluptatum repudiandae, molestiae laborum! Aliquid sint nobis amet at earum quasi officia eligendi cupiditate quos. Dolor, fuga? Corporis ab corrupti voluptates aperiam nemo suscipit reprehenderit aspernatur. Sint ad quos consequatur optio in soluta provident, amet, ipsa sapiente quasi eveniet minima dolor ut voluptatibus, tempore odio ex mollitia? Illo rerum, vitae sint nam aliquam fugit. Suscipit sit alias, rem veniam repellat quae nostrum deleniti fuga veritatis corrupti explicabo quos amet consequatur qui id cum laboriosam laborum, debitis delectus porro in. Quasi cum inventore quos expedita qui neque nostrum esse, accusantium itaque sunt laudantium molestiae? Nemo sed ut asperiores officia veniam earum iure sapiente numquam minus. Error enim rem quasi commodi id nisi aperiam, sit aliquid illum itaque. Vitae ut minima sit nam facere! Facere, architecto. Architecto voluptatibus veritatis quasi quo impedit doloribus deserunt mollitia a temporibus, unde veniam illum voluptatem asperiores magni eaque saepe enim tempora perspiciatis quos ad, animi autem? Voluptatum asperiores quis non nulla? Eveniet laboriosam iste sit a. Aliquid debitis suscipit dignissimos quo fugiat voluptate quas perferendis autem dolor. Corrupti fugiat sint, nihil ad facere omnis amet qui magni, beatae quibusdam et quisquam molestiae obcaecati rem quia ullam officiis mollitia dicta? Exercitationem dicta magni delectus? Esse sed voluptate ipsa atque dolorem nam laboriosam cupiditate dicta vero placeat?</p>
      {/* <Iframes /> */}
    </div>
  )
}
export default App;


function Iframes() {
  return (
    <>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/FdrEjwymzdY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/FdrEjwymzdY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/FdrEjwymzdY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/FdrEjwymzdY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </>
  )
}

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/FdrEjwymzdY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/FdrEjwymzdY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/FdrEjwymzdY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/FdrEjwymzdY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
