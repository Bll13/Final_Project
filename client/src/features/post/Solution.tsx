import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { ArrowPathIcon, ChartPieIcon, CursorArrowRaysIcon } from '@heroicons/react/24/outline';

function Solution(): JSX.Element {
  const solutions = [
    {
      name: 'Analytics',
      description: 'Get a better understanding of your traffic',
      href: '#',
      icon: ChartPieIcon,
    },
    {
      name: 'Engagement',
      description: 'Speak directly to your customers',
      href: '#',
      icon: CursorArrowRaysIcon,
    },

    {
      name: 'Automations',
      description: 'Build strategic funnels that will convert',
      href: '#',
      icon: ArrowPathIcon,
    },
  ];


  return (
    <div className="divBtn">
      <Popover className="relative">
        <Popover.Button className=" btn inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-200">
          <span>Информация</span>
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200 "
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <div className='displayAction'>
          <Popover.Panel className="  ActionFlex absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
            <div className="panel w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4 displayAction">
                {solutions.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                  >
                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <a href={item.href} className="font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className=" grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              </div>
            </div>
          </Popover.Panel>
          </div>
       
        </Transition>
      </Popover>
    </div>
  );
}

export default Solution;