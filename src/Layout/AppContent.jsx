import './Css/AppContent.css'
import React from'react'
import foto from '../icons/negro.jpg'
import Grid from './Grid'
import Photo from './Photo'

export default function AppContent (){
    return(
        <main className='main'>

            <div className="photo_section">
                <Photo/>
                {/* <div className="profile-photo">
                    <img src={foto} alt="Описание изображения" />
                </div> */}

            </div>
            
            <div className="grid_section">

                <div class="grid_title">
                    <h2 >Основные услуги клиники</h2>
                </div>

                <Grid/>

            </div>

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

            <footer className="w-full mt-4 text-center text-xs border-t border-white pt-2">
                © 2024 All rights reserved.
            </footer>
        </main>
    )
}