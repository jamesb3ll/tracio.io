import React, { useState } from 'react';
import { cx } from '../../utils/utils';

const plans = [
  {
    visits: '5,000',
    cost: 'FREE',
  },
  {
    visits: '5,000',
    cost: '$2,50',
  },
  {
    visits: '10,000',
    cost: '$5',
  },
  {
    visits: '50,000',
    cost: '$7,50',
  },
  {
    visits: '100,000',
    cost: '$10',
  },
  {
    visits: '500,000',
    cost: '$25',
  },
  {
    visits: '1,000,000',
    cost: '$30',
  },
  {
    visits: '5,000,000',
    cost: '$99',
  },
  {
    visits: '10M+',
    cost: 'Contact us',
  },
];

export default function Slider() {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.FormEvent<HTMLInputElement>) =>
    setValue(Number(event.currentTarget.value));
  const { visits, cost } = plans[value] || {};
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 mb-6 border-b">
        <div>
          <p className="text-sm font-bold tracking-wider uppercase mb-1">
            {value === 0 ? 'Less than' : 'More than'}
          </p>
          <p className="text-4xl font-extrabold">{visits}</p>
          <p className="text-sm font-bold tracking-wider uppercase mt-1">Monthly Visits</p>
        </div>
        <div className="sm:text-right">
          <p className="text-sm font-bold tracking-wider uppercase mb-1 mt-4 sm:mt-0">Cost</p>
          <p
            className={cx(
              'text-4xl font-extrabold',
              (value === 0 || value === plans.length - 1) && 'pb-6'
            )}
          >
            {cost}
          </p>
          {value !== 0 && value !== plans.length - 1 && (
            <p className="text-sm font-bold tracking-wider mt-1">USD</p>
          )}
        </div>
      </div>
      <div className="mt-10 mb-10">
        <input
          className="
          appearance-none
          bg-gray-200
          text-brand-500
          rounded-lg
          h-3
          w-full
          outline-none
        "
          type="range"
          name="volume"
          value={value}
          onChange={handleChange}
          min="0"
          max={plans.length - 1}
        />
      </div>
    </>
  );
}
