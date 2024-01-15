import { Link } from "@nextui-org/react";

function AppEventsList() {
  return (
    <>
      <p className="pb-1 text-xl xs:text-2xl">Upcoming Events</p>
      <div className="text-sm xs:text-lg pb-6">
        <p className="pt-1 font-extralight text-gray-400">
          <span>TBD</span>
        </p>
      </div>
      <p className="pb-1 text-xl xs:text-2xl">Previous Events</p>
      <div className="text-sm xs:text-lg">
        <p className="pt-1 font-thin text-gray-400">
          <span>22 DECEMBER 2022 - </span>
          <Link
            className="font-extralight hover:underline"
            href="https://www.stpetebrewingcompany.com/"
          >
            The Nest
          </Link>
          <span> - St. Petersburg, FL</span>
        </p>
        <p className="pt-2 font-thin text-gray-400">
          <span>16 MARCH 2023 - </span>
          <Link
            className="font-extralight hover:underline"
            href="http://www.club-201.com/"
          >
            Club 201
          </Link>
          <span> - St. Petersburg, FL</span>
        </p>
        <p
          className="pt-2 font-thin text-gray-400">
          <span>13 MAY 2023 - </span>
          <Link
            className="font-extralight hover:underline"
            href="https://www.stpetebeach.org/Facilities/Facility/Details/Upham-Beach-27"
          >
            Upham Beach
          </Link>
          <span> - St. Petersburg, FL</span>
        </p>
        <p className="pt-2 font-thin text-gray-400">
          <span>18 MAY 2023 - </span>
          <Link
            className="font-extralight hover:underline"
            href="https://www.saigonblonde.com/"
          >
            Saigon Blonde
          </Link>
          <span> - St. Petersburg, FL</span>
        </p>
        <p className="pt-2 font-thin text-gray-400">
          <span>27 JULY 2023 - </span>
          <Link
            className="font-extralight hover:underline"
            href="http://www.club-201.com/"
          >
            Club 201
          </Link>
          <span> - St. Petersburg, FL</span>
        </p>
        <p className="pt-2 font-thin text-gray-400">
          <span>7 SEP 2023 - </span>
          <Link
            className="font-extralight hover:underline"
            href="https://www.saigonblonde.com/"
          >
            Saigon Blonde
          </Link>
          <span> - St. Petersburg, FL</span>
        </p>
        <p className="pt-2 font-thin text-gray-400">
          <span>16 SEP 2023 - </span>
          <Link
            className="font-extralight hover:underline"
            href="https://www.facebook.com/districtsaintpete/"
          >
            District Lounge
          </Link>
          <span> - St. Petersburg, FL</span>
        </p>
        <p className="pt-2 font-thin text-gray-400">
          <span>29 OCT 2023 - </span>
          <Link
            className="font-extralight hover:underline"
            href="https://www.facebook.com/districtsaintpete/"
          >
            District Lounge
          </Link>
          <span> - St. Petersburg, FL</span>
          {/* <p className="text-xs xs:text-sm line-through">(Block Party on Central Avenue)</p> */}
        </p>
        <p className="pt-1 font-thin text-gray-400">
          <span>4 JANUARY 2024 - </span>
          <Link
            className="font-extralight hover:underline"
            href="https://www.saigonblonde.com/"
          >
            Saigon Blonde
          </Link>
          <span> - St. Petersburg, FL</span>
        </p>
      </div>
    </>
  );
}

export default AppEventsList;