import { NavLink } from "react-router";

const NavigationLink = ({ path, innerText }) => {
  return (
    <li className="font-work-sans text-base">
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "block font-normal text-[#13131333]"
            : isActive
              ? "block font-semibold text-[#23BE0A] border border-[#23BE0A] rounded-lg px-4 py-3"
              : "block font-normal text-[#131313cc]"
        }
        to={path}
      >
        {innerText}
      </NavLink>
    </li>
  );
};

export default NavigationLink;
