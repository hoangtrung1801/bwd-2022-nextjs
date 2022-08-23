import clsxm from "@/lib/clsxm";
import { Listbox, Transition } from "@headlessui/react";
import { ArrowsVertical, Check } from "phosphor-react";
import React, { Fragment, useState } from "react";

type SelectProps = {
    data: any[] & { value: string }[];
} & React.ComponentProps<"input">;

const people = [
    { name: "Wade Cooper" },
    { name: "Arlene Mccoy" },
    { name: "Devon Webb" },
    { name: "Tom Cook" },
    { name: "Tanya Fox" },
    { name: "Hellen Schmidt" },
];

const Select: React.FC<SelectProps> = ({
    className,
    name,
    data,
    placeholder,
}) => {
    const [selected, setSelected] = useState<any & { value: string }>();

    return (
        <Listbox value={selected} onChange={setSelected} name={name}>
            {({ open }) => (
                <div className="relative">
                    <Listbox.Button
                        className={clsxm(
                            "relative w-full cursor-default rounded-lg border-2 bg-white py-2 pl-3 pr-10 text-left focus:border-blue-400 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm",
                            [open && ""],
                            className
                        )}
                    >
                        <span
                            className={clsxm(
                                "block truncate",
                                !selected && "text-gray-300"
                            )}
                        >
                            {selected ? selected?.value : placeholder}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ArrowsVertical
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {data.map((item, id) => (
                                <Listbox.Option
                                    key={id}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                            active
                                                ? "bg-green-100 text-green-900"
                                                : "text-gray-900"
                                        }`
                                    }
                                    value={item}
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
                                                {item.value}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
                                                    <Check
                                                        className="h-5 w-5"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            )}
        </Listbox>
    );
};

export default Select;
