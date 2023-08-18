import React from 'react';
import './Home.css'

const Home = () => {
  return (
    
      <div id="down">
            <div class="first">
                <div class="firstup">
                    <div class="nav">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"/>
                        <h3>Profile</h3>
                    </div>
                    <div class="nav">
                        <img src="./ScreenShot_20230530155225.jpeg"/>
                        <h3>Friends</h3>
                    </div>
                    <div class="nav">
                        <img src="./Feed.jpeg"/>
                        <h3>Feeds (most recent)</h3>
                    </div>
                    <div class="nav">
                        <img src="./Group.jpeg"/>
                        <h3>Groups</h3>
                    </div>
                    <div class="nav">
                        <img src="./Market.jpeg"/>
                        <h3>Marketplace</h3>
                    </div>
                    <div class="nav">
                        <img src="./Watch.jpeg"/>
                        <h3>Watch</h3>
                    </div>
                    <div class="nav">
                        <img src="./Memo.jpeg"/>
                        <h3>Memories</h3>
                    </div>
                    <div class="nav">
                        <img src="./Saved.jpeg"/>
                        <h3>Saved</h3>
                    </div>
                    <div class="nav">
                        <img />
                        <h3>See more</h3>
                    </div>
                </div>
                <div class="firstdo">
                    <div class="head">
                        <h2>Your shortcuts</h2>
                    </div>
                    <div class="two">
                        <img src="https://scontent-bom1-2.xx.fbcdn.net/v/t39.2081-6/22088589_1654976451201719_5191478939503034368_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=3tiVKBpdRM0AX8SSYzt&_nc_ht=scontent-bom1-2.xx&oh=00_AfBgk9rbXWtKeIYzGCIyQTo02WvmhzUrGpwKnmVkg2h_Lw&oe=647AF482"/>
                        <h3>Candy Crush Saga</h3>
                    </div>
                    <div class="two">
                        <img src="https://scontent-bom1-2.xx.fbcdn.net/v/t39.2081-6/26477732_5082148895180525_4133107059698696192_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=6jApPasr3TkAX_HAwz7&_nc_ht=scontent-bom1-2.xx&oh=00_AfAPaiTnPV7r7pUbjChR947G0Eq1BgzmzEL_wHQbmeBelw&oe=647B73A4"/>
                        <h3>FarmVille 2</h3>
                    </div>
                    <div class="two">
                        <img src="https://scontent-bom1-1.xx.fbcdn.net/v/t39.2081-6/851564_185160114982004_1922449556_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=106&ccb=1-7&_nc_sid=b29aad&_nc_ohc=oXlaYve20NwAX-kfj0X&_nc_ht=scontent-bom1-1.xx&oh=00_AfBLDqjmOcHA3-_NZfpDEThMqKIs4ZBuxhMF0XBFh2WErQ&oe=6479FF4E"/>
                        <h3>TeenPatti</h3>
                    </div>
                </div>
            </div>
            <div class="second">
                <div id="Fbpost">1</div>
            </div>
            <div class="third">
                <div class="thirdup">
                    <div class="cont">
                        <h3>Contacts</h3>
                        <img src="https://thumbs.dreamstime.com/b/live-streaming-icon-flat-design-video-icon-live-streaming-icon-flat-design-video-icon-192051750.jpg"/>
                        <i class="fa-solid fa-magnifying-glass" ></i>
                        <i class="fa-solid fa-grip" ></i>
                    </div>
                    <div class="all">
                        <div class="all1">Naval</div>
                        <div class="all2">Rahul</div>
                    </div>
                </div>
                <div class="thirdown">
                    <div id="switch">
                        <button onclick="window.location.href=`./FBLogin.html`">Login</button>
                        <button onclick="window.location.href=`./FBRegister.html`">Register</button>
                    </div>
                    <div id="logout"></div>
                    <div>
                </div>
            </div>
        </div>
        </div>
    
  )
}

export default Home
