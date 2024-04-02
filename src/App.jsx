import './App.css';
import React, {useState} from 'react';
import galaga from './assets/images/galaga.jpeg';


function App() {
const [notification, setNotification] = useState(4)
const [notRead, setNotRead] = useState(true)

const handlePostClick = (event) => {
  const post = event.currentTarget;
  const status = post.querySelector('.status');
  status.classList.remove('not-read');
  setNotification((prevNotification) => Math.max(0, prevNotification - 1));
  if (notification === 1) {
    setNotRead(false);
  }
};

const handleMarkAllRead = () => {
  setNotification(0);
  setNotRead(false);
}
  return (
    <>
      {/* Notifications page */}
      <section className='main'>
        <div className='notifications'>
          <h3 className='title'>Notifiche <span className='number'>{notification}</span></h3>
          <p className={`mark ${!notRead ? 'markAllRead':''}` } onClick={handleMarkAllRead}>Contrassegnare tutto come letto</p>
        </div>

        <div className='post' onClick={handlePostClick}>
          <div className='image1'></div>
          <div>
            <p>
              <span className='name'>Chicha </span>
              <span>reacted to your recent post </span>
              <span className='reaction'>Il mio primo torneo oggi!</span>
              <span className={`status ${notRead ? 'not-read' : ''}`}> </span>
            </p>
            <p className='time'>1m fa</p>
          </div>
        </div>

        <div className='post' onClick={handlePostClick}>
        <div className='image2'></div>
          <div>
            <p>
              <span className='name'>Chontaduro </span>
              <span>ti ho seguito</span>
              <span className={`status ${notRead ? 'not-read' : ''}`}></span>
            </p>
            <p className='time'>5m fa</p>
          </div>
        </div>

        <div className='post' onClick={handlePostClick}>
        <div className='image3'></div>
          <div>
            <p>
              <span className='name'>Pepita </span>
              <span>si è unito al tuo gruppo </span>
              <span className='group'>2600 Club</span>
              <span className={`status ${notRead ? 'not-read' : ''}`}></span>
            </p>
            <p className='time'>1 giorno fa</p>
          </div>
        </div>

        <div className='post' onClick={handlePostClick}>
        <div className='image4'></div>
          <div>
            <p>
              <span className='name'>Arakacha </span>
              <span>ti ha inviato un messaggio privato </span>
              <span className={`status ${notRead ? 'not-read' : ''}`}></span>
            </p>
            <p className='time'>5 giorni fa</p>
            <div className='message-container'>
            <p className='message'>Hello, thanks for setting up the 2600 Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.</p>
            </div>
          </div>
        </div>

        <div className='post' onClick={handlePostClick}>
        <div className='image5'></div>
          <div>
            <p>
              <span className='name'>Mazorca </span>
              <span>ha commentato la tua foto </span>
              <span className='status'></span>
            </p>
            <p className='time'>1 settimana fa</p>
          </div>
          <img className='picture' src={galaga} alt="" />
        </div>

        <div className='post' onClick={handlePostClick}>
        <div className='image6'></div>
          <div>
            <p>
              <span className='name'>Panela </span>
              <span>ha reagito al tuo post recente </span>
              <span className='reaction'>5 strategie di fine gioco per aumentare la tua percentuale di vincita</span>
              <span className='status'></span>
            </p>
            <p className='time'>2 settimane fa</p>
          </div>
        </div>

       

      </section>

    </>
  )
}

export default App
