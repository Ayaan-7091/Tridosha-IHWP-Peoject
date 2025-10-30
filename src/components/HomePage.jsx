import React from 'react';
import Card from './Card';
import FollowUps from './FollowUps';
import logo from './logo.png';
import p1 from './p1.png';
import p2 from './p2.png';
import p3 from './p3.png';



export default function HomePage({ currentUser, setPage, updateUser }) {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <div className='flex items-center justify-center'>
        <img src={logo} alt="" className='h-40'/>
        </div>
         <div>
        <h1 className="text-4xl font-bold text-green-900 mb-4">Welcome, {currentUser.name}!</h1>
        <p className="text-gray-600 text-lg">Discover your Prakriti and achieve holistic wellness</p>
        </div>
        
       
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card
          title="Analyze Prakriti"
          description="Take the Prakriti questionnaire"
          icon={<img src={p1} alt="Diet Icon" className="w-25 h-25" />}
          onClick={() => setPage('prakriti')}
          status={currentUser.prakriti ? '✓ Complete' : 'Pending'}
        />
        <Card
          title="Diet Chart"
          description="Personalized diet recommendations"
          icon={<img src={p2} alt="Diet Icon" className="w-25 h-25" />}
          onClick={() => setPage('diet')}
          disabled={!currentUser.prakriti}
          status={currentUser.prakriti ? '✓ Available' : 'Complete Prakriti first'}
        />
        <Card
          title="Daily Schedule"
          description="Routine suggestions"
          icon={<img src={p3} alt="Diet Icon" className="w-25 h-25" />}
          onClick={() => setPage('schedule')}
          disabled={!currentUser.prakriti}
          status={currentUser.prakriti ? '✓ Available' : 'Complete Prakriti first'}
        />
      </div>

      {/* User Follow-ups */}
      <FollowUps currentUser={currentUser} updateUser={updateUser} />
    </div>
  );
}
