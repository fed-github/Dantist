import './Css/AppContent.css'
import React from'react'
import foto from '../icons/negro.jpg'
import Slider from './Slider'
import Grid from './Grid'

export default function AppContent (){
    return(
        <main className='main'>
             
             <div className="profile-photo">
                <img src={foto} alt="Описание изображения" />
            </div>
            <div class="Grid_title">
                 <h1>Основные услуги клиники</h1>
            </div>
            <div className="main__cover">
               
                
                
                <Grid/>
            
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit at nesciunt, perspiciatis dolorem itaque excepturi accusamus labore quo nemo quod architecto dolores inventore a rem iure omnis maxime, voluptatem temporibus.
                    Consequatur voluptate reprehenderit aliquid omnis autem enim molestias suscipit earum. Nostrum itaque error ut autem laboriosam temporibus. Ducimus, voluptatibus soluta quasi incidunt magni odit voluptas! Voluptatum accusamus unde cum saepe?
                </p>
                
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit at nesciunt, perspiciatis dolorem itaque excepturi accusamus labore quo nemo quod architecto dolores inventore a rem iure omnis maxime, voluptatem temporibus.
                    Consequatur voluptate reprehenderit aliquid omnis autem enim molestias suscipit earum. Nostrum itaque error ut autem laboriosam temporibus. Ducimus, voluptatibus soluta quasi incidunt magni odit voluptas! Voluptatum accusamus unde cum saepe?
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit at nesciunt, perspiciatis dolorem itaque excepturi accusamus labore quo nemo quod architecto dolores inventore a rem iure omnis maxime, voluptatem temporibus.
                    Consequatur voluptate reprehenderit aliquid omnis autem enim molestias suscipit earum. Nostrum itaque error ut autem laboriosam temporibus. Ducimus, voluptatibus soluta quasi incidunt magni odit voluptas! Voluptatum accusamus unde cum saepe?
                </p> 

            </div>
        </main>
    )
}