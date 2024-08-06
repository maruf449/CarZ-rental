"use client";
import { useEffect, useState } from 'react';
import Head from 'next/head';

const Maintenance = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const endTime = new Date('2024-09-15T00:00:00Z').getTime();

    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTimeRemaining({ days, hours, minutes, seconds });
    };

    calculateTimeRemaining();
    const timer = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Under Maintenance</title>
        <meta name="description" content="We are currently undergoing maintenance. Please check back later." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">We’re Under Maintenance</h1>
          <p className="text-lg mb-8">We’re working hard to improve our website. Please check back later.</p>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Estimated Time Remaining</h2>
            <div className="flex justify-center gap-4">
              <div className="bg-gray-800 text-white p-4 rounded-lg">
                <span className="text-3xl font-bold">{timeRemaining.days}</span>
                <div>Days</div>
              </div>
              <div className="bg-gray-800 text-white p-4 rounded-lg">
                <span className="text-3xl font-bold">{timeRemaining.hours}</span>
                <div>Hours</div>
              </div>
              <div className="bg-gray-800 text-white p-4 rounded-lg">
                <span className="text-3xl font-bold">{timeRemaining.minutes}</span>
                <div>Minutes</div>
              </div>
              <div className="bg-gray-800 text-white p-4 rounded-lg">
                <span className="text-3xl font-bold">{timeRemaining.seconds}</span>
                <div>Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maintenance;
