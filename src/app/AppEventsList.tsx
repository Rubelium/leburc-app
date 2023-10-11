import { Link } from "@nextui-org/react";

function AppEventsList() {
  return (
    <>
      <p className="pb-1 text-xl min-[460px]:text-2xl">Events</p>
      <div className="text-sm min-[460px]:text-lg">
        <p className="pt-1 font-thin line-through text-gray-400">
          <span>16 MARCH 2023 - </span>
          <Link
            isDisabled
            className="line-through"
            href="http://www.club-201.com/"
          >
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
            href="https://www.stpetebeach.org/Facilities/Facility/Details/Upham-Beach-27"
          >
            Upham Beach
          </Link>
          <span> - St. Petersburg, FL</span>
        </p>
        <p className="pt-2 font-thin line-through text-gray-400">
          <span>18 MAY 2023 - </span>
          <Link
            isDisabled
            className="line-through"
            href="https://www.saigonblonde.com/"
          >
            Saigon Blonde
          </Link>
          <span> - St. Petersburg, FL</span>
        </p>
        <p className="pt-2 font-thin line-through text-gray-400">
          <span>27 JULY 2023 - </span>
          <Link
            isDisabled
            className="line-through"
            href="http://www.club-201.com/"
          >
            Club 201
          </Link>
          <span> - St. Petersburg, FL</span>
        </p>
        <p className="pt-2 font-thin line-through text-gray-400">
          <span>7 SEP 2023 - </span>
          <Link
            isDisabled
            className="line-through"
            href="https://www.saigonblonde.com/"
          >
            Saigon Blonde
          </Link>
          <span> - St. Petersburg, FL</span>
        </p>
        <p className="pt-2 font-thin line-through text-gray-400">
          <span>16 SEP 2023 - </span>
          <Link
            isDisabled
            className="line-through"
            href="https://www.facebook.com/districtsaintpete/"
          >
            District Lounge
          </Link>
          <span> - St. Petersburg, FL</span>
        </p>
        <p className="pt-2 font-thin">
          <span>29 OCT 2023 - </span>
          <Link
            className="font-extralight hover:underline"
            href="https://www.facebook.com/districtsaintpete/"
            showAnchorIcon
          >
            District Lounge
          </Link>
          <span> - St. Petersburg, FL</span>
          <p className="text-xs">(Block Party on Central Avenue)</p>
        </p>
      </div>
    </>
  );
}

export default AppEventsList;