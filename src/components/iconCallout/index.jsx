import React, { PropTypes } from "react";
import { color, timing } from "../../../settings.json";
import font from "../../utils/font";
import { add, span, gutter } from "../../utils/grid";
import Icon from "../icon";
import Heading from "../heading";
import MoreLink from "../moreLink";

const containerMaxWidth = add([span(2, "static"), gutter("static")], "static");

const styles = {
  container: {
    display: "flex",
    flexGrow: 1,
    fontFamily: font("benton"),
    justifyContent: "center",
    maxWidth: containerMaxWidth,
    textAlign: "center",
  },

  anchor: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    textDecoration: "none",
  },

  icon: {
    color: color.blue,
    fontSize: "96px",
    transition: `transform ${timing.default} ease-in-out`,
  },

  heading: {
    fontSize: "20px",
    marginTop: "33px",
    transition: `color ${timing.default} ease-in-out`,
  },

  copy: {
    color: color.lightText,
    fontSize: "16px",
    lineHeight: (24 / 16),
    marginBottom: "23px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "11px",
  },

  link: {
    marginTop: "auto",
  },
};

function IconCallout({ iconName, title, copy, link }) {
  const IconElement = React.createElement(Icon[iconName], {
    style: styles.icon,
    ariaHidden: true,
    className: "IconCallout-icon",
  });

  return (
    <div className="IconCallout" style={styles.container}>
      <a href={link.href} style={styles.anchor}>
        {IconElement}

        <Heading level={3} weight="thick" override={styles.heading}>
          {title}
        </Heading>

        <p style={styles.copy}>
          {copy}
        </p>

        {link.label &&
          <MoreLink size="small" style={styles.link} caps isNested>
            {link.label}
          </MoreLink>
        }
      </a>
    </div>
  );
}

IconCallout.propTypes = {
  iconName: PropTypes.oneOf(Object.keys(Icon)).isRequired,
  title: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  link: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
  }).isRequired,
};

export default IconCallout;