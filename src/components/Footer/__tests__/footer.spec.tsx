import React from "react";
import { shallow } from "enzyme";
import { Footer } from "../footer";

describe("Header", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it("renders copyright & name without crashing", () => {
    expect(wrapper.find("span").shallow().text()).toEqual(
      `© ${new Date().getFullYear()} Alfonso Austin-Rivera`
    );
  });
});
