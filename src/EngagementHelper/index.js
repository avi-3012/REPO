const engagementHelper = {
  engagementMessageOverTimeChartOptions: function (messageCountList, channels) {
    //filter channels having messages on multiple dates
    const channelsWithMultipleDates = channels.filter((channel) => {
      const dates = messageCountList
        .filter((data) => data.channelId === channel.id)
        .map((data) => data.date);

      return dates.length > 1;
    });

    var series = [];
    channelsWithMultipleDates.forEach((element) => {
      const channelId = element.id;
      const channelName = element.name;

      const channelMessages = messageCountList.filter(
        (message) => message.channelId === channelId
      );

      const data = channelMessages.map((message) => ({
        x: new Date(message.timeBucket).getTime(),
        y: parseInt(message.count),
      }));
      series.push({
        name: channelName,
        type: "spline",
        data: data,
      });

      console.log(data);
    });

    return {
      xAxis: {
        type: "datetime",
        title: {
          text: "Date",
        },
        // one day
        tickInterval: 24 * 3600 * 1000,
      },
      //   yAxis: {},
      series: [...series],
    };
  },
};

export default engagementHelper;
