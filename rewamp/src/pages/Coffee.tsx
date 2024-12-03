import { SiCoffeescript } from "react-icons/si";
import { GiCakeSlice } from "react-icons/gi";
import bgimg from ".././assets/coffeeimg.jpg";



const Coffee = (): JSX.Element => {
  return (
    <div
      className="flex flex-1 justify-center items-center h-screen w-screen"
      style={{ backgroundImage: `url(${bgimg})`, backgroundSize: "cover" }}
    >
      <div className="h-auto w-1/4 coffee bg-[#deb887] p-4 flex flex-col">
        <div className="flex flex-col gap-2 border-b-4 border-red-600">
          <h1 className="font-black text-3xl text-center">CAMPER CAFE</h1>
          <p className="text-xl text-center mb-2">Est. 2020</p>
        </div>

        <div className="flex flex-col gap-2 ">
          <h1 className="font-black text-2xl mt-3 text-center">Coffee</h1>
          <SiCoffeescript className="text-3xl mx-auto" />
          <table className="text-lg w-full">
            <tbody>
              <tr>
                <td>Latte</td>
                <td className="text-right">$4.00</td>
              </tr>
              <tr>
                <td>Espresso</td>
                <td className="text-right">$3.00</td>
              </tr>
              <tr>
                <td>Cappuccino</td>
                <td className="text-right">$3.50</td>
              </tr>
              <tr>
                <td>Americano</td>
                <td className="text-right">$3.00</td>
              </tr>
              <tr>
                <td>Mocha</td>
                <td className="text-right">$4.50</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-2 border-b-4 border-red-600 ">
          <h1 className="font-black text-2xl mt-3 text-center">Desserts</h1>
          <GiCakeSlice className="text-3xl mx-auto" />
          <table className="text-lg mb-2 w-full">
            <tbody>
              <tr>
                <td>Donut</td>
                <td className="text-right">$4.00</td>
              </tr>
              <tr>
                <td>Cerry Pie</td>
                <td className="text-right">$3.00</td>
              </tr>
              <tr>
                <td>Cheesecake</td>
                <td className="text-right">$3.50</td>
              </tr>
              <tr>
                <td>Cinnamon Roll</td>
                <td className="text-right">$3.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-center">
          <a href="#" className="text-lg  underline">
            Visit our website
          </a>
          <p className="text-lg ">123 free Code Camp Drive</p>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
