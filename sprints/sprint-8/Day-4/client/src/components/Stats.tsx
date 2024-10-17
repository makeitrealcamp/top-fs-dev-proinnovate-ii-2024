import { type StatsProps } from "../types"

export const Stats = ({amount, completed}:StatsProps) : JSX.Element => {
  return (
    <div className="flex flex-row justify-center items-center my-6">
        <h4 className="text-white text-xl font-bold">{`You have completed ${completed} out of ${amount} tasks 🚀`}</h4>
    </div>
  )
}