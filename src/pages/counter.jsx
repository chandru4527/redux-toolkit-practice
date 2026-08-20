import { useDispatch, useSelector } from "react-redux";
import { MdAdd, MdRemove, MdRestartAlt, } from "react-icons/md";
import { increment, decrement, incrementByAmount, reset, } from "../features/counter/counterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="flex items-center justify-center p-4">
            <div className="w-full max-w-xs rounded-sm border border-gray-200 bg-white p-6 shadow-md">

                {/* Heading */}
                <div className="mb-6">
                    <h1 className="text-xl font-bold text-gray-900">
                        Counter App
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        Manage your counter using Redux Toolkit
                    </p>
                </div>

                {/* Count */}
                <div className="mb-6 rounded-lg bg-gray-50 py-8 text-center">
                    <p className="mb-2 text-sm font-medium text-gray-500">
                        Current Value
                    </p>

                    <h2 className="text-5xl font-bold text-gray-900">
                        {count}
                    </h2>
                </div>

                {/* Main Controls */}
                <div className="grid grid-cols-2 gap-3">

                    <button
                        onClick={() => dispatch(decrement())}
                        className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 py-2.5 font-medium text-gray-700 transition hover:bg-gray-50"
                    >
                        <MdRemove size={20} />
                        Decrease
                    </button>

                    <button
                        onClick={() => dispatch(increment())}
                        className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 py-2.5 font-medium text-white transition hover:bg-blue-700"
                    >
                        <MdAdd size={20} />
                        Increase
                    </button>

                </div>

                {/* Secondary Controls */}
                <div className="mt-3 grid grid-cols-2 gap-3">

                    <button
                        onClick={() => dispatch(incrementByAmount(5))}
                        className="rounded-lg border border-gray-200 py-2.5 font-medium text-gray-700 transition hover:bg-gray-50"
                    >
                        +5
                    </button>

                    <button
                        onClick={() => dispatch(reset())}
                        className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 py-2.5 font-medium text-gray-700 transition hover:bg-gray-50"
                    >
                        <MdRestartAlt size={20} />
                        Reset
                    </button>

                </div>

            </div>
        </div>
    );
};

export default Counter;