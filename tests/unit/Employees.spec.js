import { shallowMount } from "@vue/test-utils";
import Employees from "../../src/components/Employees.vue";
import axios from "axios";

describe("Employees.vue", () => {
  it("Page title prop matches as 'Employees'", async () => {
    const title = "Employees";
    const wrapper = shallowMount(Employees, {
      props: { title },
    });
    await expect(wrapper.find('[data-title-test="pageTitle"]').text()).toMatch(
      title
    );
  });

  /**
   * NOTE: Always keep axios mock nested in concerned test case. Don't mock it(jest.mock("axios");
) as globally 
   */
  it("Returns the first user name", async () => {
    const mockAxiosGet = jest.spyOn(axios, "get");
    mockAxiosGet.mockResolvedValue({
      data: [
        {
          id: 1,
          name: "Shoaib Ahmad",
        },
        {
          id: 2,
          name: "Ervin Howell",
        },
      ],
    });
    const name = await getFirstUserName();
    expect(name).toEqual("Shoaib Ahmad");
  });
});

const getFirstUserName = async () => {
  const response = await axios.get(process.env.VUE_APP_BASE_URL + "/albums");
  return response.data[0].name;
};

jest.resetAllMocks(); //This will help ensure your mocks won't interfere with future tests.
