import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
// import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import "./style.css";

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
        <>
            <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1 font-mulish text-base">
                    <Listbox.Button
                        className="relative w-full font-mulish cursor-default bg-white pl-3 pr-10 text-left
                    
                    
                    py-5 px-6 rounded-xl h-[60px] text-base font-medium leading-5 border-2 border-dark_6 text-dark_2 outline-none focus:border-dark_4 transition-all duration-150 placeholder:text-dark_4"
                    >
                        <span className="block truncate font-mulish text-base font-medium text-dark_3 leading-[1.3em] px-4 -mt-[2px]">
                            {selected.name}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5">
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
                                    strokeLinejoin="round"
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
                        <Listbox.Options className="custom-scrollbar absolute max-h-[120px] md:max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base focus:outline-none sm:text-sm font-mulish shadow-[0_12px_24px_0_rgba(0,0,0,0.07)]">
                            {people.map((person, personIdx) => (
                                <Listbox.Option
                                    key={personIdx}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-4 pl-10 pr-4 font-mulish text-base leading-[1.87em] text-[yellow] ${
                                            active
                                                ? " text-[red] font-semibold"
                                                : " text-[green] font-normal"
                                        }`
                                    }
                                    value={person}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate text-dark_3 font-mulish leading-[1.25em] text-base ${
                                                    selected
                                                        ? "font-semibold text-primary"
                                                        : "font-normal text-dark_1"
                                                }`}
                                            >
                                                {person.name}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                    <svg
                                                        width="14"
                                                        height="14"
                                                        viewBox="0 0 14 14"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M4.55013 11.9756C4.32037 11.976 4.09279 11.931 3.88046 11.8432C3.66813 11.7554 3.47525 11.6265 3.31288 11.464L0.050293 8.20198L0.875126 7.37656L4.13771 10.6391C4.2471 10.7485 4.39545 10.8099 4.55013 10.8099C4.70481 10.8099 4.85315 10.7485 4.96254 10.6391L13.1251 2.47656L13.95 3.3014L5.78738 11.464C5.62501 11.6265 5.43212 11.7554 5.21979 11.8432C5.00747 11.931 4.77989 11.976 4.55013 11.9756Z"
                                                            fill="#884A39"
                                                        />
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
        </>
    );
}
