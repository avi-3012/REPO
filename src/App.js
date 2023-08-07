import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import engagementHelper from "./EngagementHelper";
import DarkUnica from "highcharts/themes/dark-unica";
import data from "./data.js";

const { messageCountList, channels } = data;

const EngagementMessagesOverTime = () => {
  DarkUnica(Highcharts);
  const options = engagementHelper.engagementMessageOverTimeChartOptions(
    messageCountList,
    channels
  );

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default EngagementMessagesOverTime;
