import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import engagementHelper from "./EngagementHelper";
import DarkUnica from "highcharts/themes/dark-unica";
import options from "./data.js";

const { messageCountList, channels } = options;

console.log(messageCountList.length, channels.length);

const EngagementMessagesOverTime = () => {
  DarkUnica(Highcharts);
  const options = engagementHelper.engagementMessageOverTimeChartOptions(
    messageCountList,
    channels
  );

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default EngagementMessagesOverTime;
