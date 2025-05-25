import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import activityData from '../../../util/ActivityData/ActivityData';

export default function ActivityFeed() {
  return (
    <div style={{ background: '#f7f8ff', padding: '20px', borderRadius: '12px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
        <h4 style={{ margin: 0 }}>Activity</h4>
        <span style={{ fontSize: '12px', color: '#888' }}>3 appointments on this week</span>
      </div>

      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={activityData} barCategoryGap={6}>
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar dataKey="bar1" fill="#D3D3D3" radius={[10, 10, 0, 0]} barSize={6} />
          <Bar dataKey="bar2" fill="#0FC2C0" radius={[10, 10, 0, 0]} barSize={6} />
          <Bar dataKey="bar3" fill="#5B5F97" radius={[10, 10, 0, 0]} barSize={6} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
