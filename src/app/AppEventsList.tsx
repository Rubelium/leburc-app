import { Link } from "@nextui-org/react";

function AppEventsList() {
  return (
    <>
      <p className="text-xl">Events</p><p className="pt-1 font-thin line-through text-gray-400">
        <span>16 MARCH 2023 - </span>
        <Link
          isDisabled
          className="line-through"
          href="http://www.club-201.com/">
          Club 201
        </Link>
        <span> - St. Petersburg, FL</span>
      </p>
      <p
        className="pt-2 font-thin line-through text-gray-400">
        <span>13 MAY 2023 - </span>
        <Link
          isDisabled
          className="line-through"
          href="https://www.stpetebeach.org/Facilities/Facility/Details/Upham-Beach-27">
          Upham Beach
        </Link>
        <span> - St. Petersburg, FL</span>
      </p>
      <p className="pt-2 font-thin line-through text-gray-400">
        <span>18 MAY 2023 - </span>
        <Link
          isDisabled
          className="line-through"
          href="https://www.saigonblonde.com/">
          Saigon Blonde</Link>
        <span> - St. Petersburg, FL</span>
      </p>
      <p className="pt-2 font-thin line-through text-gray-400">
        <span>27 JULY 2023 - </span>
        <Link
          isDisabled
          className="line-through"
          href="http://www.club-201.com/">
          Club 201</Link>
        <span> - St. Petersburg, FL</span>
      </p>
      <p className="pt-2 font-thin line-through text-gray-400">
        <span>7 SEP 2023 - </span>
        <Link
          isDisabled
          className="line-through"
          href="https://www.saigonblonde.com/">
          Saigon Blonde
        </Link>
        <span> - St. Petersburg, FL</span>
      </p>
      <p className="pt-2 font-thin line-through text-gray-400">
        <span>16 SEP 2023 - </span>
        <Link
          isDisabled
          className="line-through"
          href="https://www.facebook.com/districtsaintpete/">
          District Lounge
        </Link>
        <span> - St. Petersburg, FL</span>
      </p>
      <p className="pt-2 font-thin">
        <span>29 OCT 2023 - </span>
        <Link
          showAnchorIcon
          className="font-extralight hover:underline"
          isDisabled
          href="">
          TBA
        </Link>
        <span> - St. Petersburg, FL</span>
      </p>
    </>
  );
}

export default AppEventsList;