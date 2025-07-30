import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/BreadCrumb.module.css";

const Breadcrumb = ({ links }) => {
  return (
    <nav className={styles.breadcrumb}>
      {links.map((link, index) => (
        <span key={index}>
          {link.to ? (
            <Link to={link.to} className={styles.link}>
              {link.name}
            </Link>
          ) : (
            <span className={styles.active}>{link.name}</span>
          )}
          {index < links.length - 1 && <span className={styles.separator}>›</span>}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
