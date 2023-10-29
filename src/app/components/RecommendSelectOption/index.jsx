import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
// import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const people = [
    { name: "Choice an option" },
    { name: "Arlene Mccoy" },
    { name: "Devon Webb" },
    { name: "Tom Cook" },
    { name: "Tanya Fox" },
    { name: "Hellen Schmidt" },
];

export default function RecommendSelectOption() {
    const [selected, setSelected] = useState(people[0]);

    return (
        <div className="">
            <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1 font-mulish text-base">
                    <Listbox.Button
                        className="relative w-full font-mulish cursor-default bg-white pl-3 pr-10 text-left
                    
                    
                    py-5 px-6 rounded-xl h-[60px] text-base font-medium leading-5 border-2 border-dark_6 text-dark_2 outline-none focus:border-dark_4 transition-all duration-150 placeholder:text-dark_4"
                    >
                        <span className="block truncate font-mulish text-base font-medium text-dark_3 leading-[1.25em] px-4">
                            {selected.name}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15.8327 7.5L9.99935 13.3333L4.16602 7.5"
                                    stroke="#53413B"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm font-mulish text-base">
                            {people.map((person, personIdx) => (
                                <Listbox.Option
                                    key={personIdx}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 font-mulish text-base ${
                                            active
                                                ? "bg-amber-100 text-amber-900"
                                                : "text-gray-900"
                                        }`
                                    }
                                    value={person}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${
                                                    selected
                                                        ? "font-medium"
                                                        : "font-normal"
                                                }`}
                                            >
                                                {person.name}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 font-mulish text-base text-amber-600">
                                                    <svg
                                                        width="18"
                                                        height="18"
                                                        viewBox="0 0 18 18"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clip-path="url(#clip0_757_7056)">
                                                            <path
                                                                d="M5.8275 15.4416C5.52989 15.4423 5.2351 15.3841 4.96004 15.2704C4.68499 15.1568 4.43511 14.9899 4.22475 14.7794L0 10.5546L1.068 9.48589L5.29275 13.7106C5.43451 13.8523 5.62672 13.9319 5.82712 13.9319C6.02753 13.9319 6.21974 13.8523 6.3615 13.7106L16.932 3.14014L18 4.20889L7.4295 14.7794C7.21928 14.9899 6.96953 15.1568 6.6946 15.2704C6.41967 15.3841 6.12499 15.4423 5.8275 15.4416V15.4416Z"
                                                                fill="#884A39"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_757_7056">
                                                                <rect
                                                                    width="18"
                                                                    height="18"
                                                                    fill="white"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
}
