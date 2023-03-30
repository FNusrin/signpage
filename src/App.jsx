import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <div className='full-width'>
        <div className='image-part'>  <div className='header-part'>
          <header className='dribble-header'>
            <a href="https://dribbble.com/"><h4 style={{ color: "#D77C8C", opacity: "0.7px" }}>dribble</h4></a>
            <h1 style={{ color: "#bd5567", fontSize: "32px", }}>Discover the world's top Designers& Creatives.</h1>
          </header>
        </div>
          <img width={'100%'} src="https://cdn.dribbble.com/assets/auth/sign-in-a63d9cf6c1f626ccbde669c582b10457b07523adb58c2a4b46833b7b4925d9a3.jpg" alt=""
            style={{ position: "relative", padding: "100px 0 0" }} />


        </div>
        <div className='sign-in-part'>
          <div className='content'>
            <div className='signin'>
              <h2>Sign in to Dribble</h2>
              <div className='sign-in-form'>
                <form name='user-details'>
                  <div className='form-fields'>
                    <fieldset className='textfield'>
                      <label className='uname'>Username or Email Address</label>
                      <input type="text" name="username" id="username" style={{
                        width: "100%", height: "35px",
                        lineHeight: "28px", border: "0px", borderRadius: "8px", outline: "none", backgroundColor: "#f3f3f4"
                      }}></input>
                    </fieldset>
                    <fieldset className='passfield'>
                      <label className='pass'>Password</label>
                      <input type="password" name='password' id="password" style={{
                        width: "100%", height: "35px",
                        lineHeight: "28px", border: "0px", borderRadius: "8px", outline: "none", backgroundColor: "#f3f3f4"
                      }}></input>
                    </fieldset>
                  </div>
                  <input className='btn-signin' type="submit" value="Sign In"></input>

                </form>

              </div>
            </div>
          </div>

        </div>
        {/* <div className="dribblecontainer" style={{
          height: "100%",
          width: "30%", backgroundColor: "aqua",
          position: "relative", top: "0", overflow: "hidden"
        }}></div> */}

        {/* <div className="signup" style={{
          height: "100%",
          width: "30%", backgroundColor: "aqua",
        }}>


        </div> */}

      </div>
    </div>


  )
}

export default App
