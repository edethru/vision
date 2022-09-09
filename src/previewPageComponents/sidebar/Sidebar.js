import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

const Links = ({ links }) => {
  return (
    <>
      <ul>
        {links.map((link) => {
          return (
            <li>
              <NavLink
                to={link.linkTo}
                activeClassName="active"
                className={link.acive ? "link active" : "link"}
              >
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export const links = [
  {
    text: "The Header",
    linkTo: "/preview-and-publish/header",
  },
  {
    text: "Hero",
    linkTo: "/preview-and-publish/hero",
  },
  {
    text: "Images highlight",
    linkTo: "/preview-and-publish/img-highlight",
  },
  {
    text: "Community Description",
    linkTo: "/preview-and-publish/community-description",
  },
  {
    text: "Community owner",
    linkTo: "/preview-and-publish/community-owener",
  },
  {
    text: "Group List",
    linkTo: "/preview-and-publish/group-list",
  },
  {
    text: "Community Live feed",
    linkTo: "/preview-and-publish/community-live-feed",
  },
  {
    text: "Testimonial Section ",
    linkTo: "/preview-and-publish/testimonial",
  },
  {
    text: "FAQ section",
    linkTo: "/preview-and-publish/faq-section",
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="tag">Preview Section</div>
      <div className="links-preview">
        <Links links={links} />
      </div>
    </div>
  );
};

export default Sidebar;
