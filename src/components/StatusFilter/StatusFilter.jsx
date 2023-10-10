import { useSelector } from "react-redux";
import getStatusFilterSelector from "./selectors";

export default function StatusFilter() {
  const status = useSelector(getStatusFilterSelector);
  console.log(status);
  return <div>StatusFilter</div>;
}
