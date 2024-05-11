'use client';
import { useState, useLayoutEffect } from 'react';

import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

// leaflet css
import 'leaflet/dist/leaflet.css';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';



const markers = [
    {
        position: [9.0764, 7.4253],
        title: 'Location 1',
        subtitle: "Explore global flavors at W'Foods.",
        image: '/map/1.png',
    },
    {
        position: [9.113521, 7.410800],
        title: 'Location 2',
        subtitle: "Explore global flavors at W'Foods.",
        image: '/map/2.png',
    },
    {
        position: [9.094824, 7.493341],
        title: 'Location 3',
        subtitle: "Explore global flavors at W'Foods.",
        image: '/map/3.png',
    },
];

const customIcon = new Icon({
    iconUrl: '/pin-solid.svg',
    iconSize: [40, 40],
});

const Map = () => {
    const [active, setActive] = useState(false);
    const [MapContainer, setMapContainer] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('react-leaflet').then(({ MapContainer }) => {
                setMapContainer(MapContainer);
            }).catch(error => {
                console.error('Error loading MapContainer:', error);
            });
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== 'undefined') {
                setActive(window.scrollY > 100);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    if (!MapContainer) {
        return null; // Render nothing until MapContainer is loaded
    }

    return (
        <motion.section
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className='relative xl:after:w-full xl:after:h-[240px]
            xl:after:bg-gradient-to-b xl:after:from-white xl:after:via-white/80
            xl:after:to-white/20 xl:after:absolute  xl:after:top-0 xl:after:z-20'
            
        >
            <MapContainer
                center={[9.076417902001975, 7.4253318506290436]}
                zoom={isMobile ? 10 : 12}
                className={`${isMobile ? 'h-[300px]' : 'h-[900px]'} z-10`}
                zoomControl={false}
            >
                {/* Render your Leaflet Map components here */}
            </MapContainer>
        </motion.section>
    );
}

export default Map;
