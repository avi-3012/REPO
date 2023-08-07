const engagementHelper = {
  engagementMessageOverTimeChartOptions: function (messageCountList, channels) {
    const generalChannelId = "825030076239577109";

    const generalChannelMessages = messageCountList.filter(
      (message) => message.channelId === generalChannelId
    );

    const data = generalChannelMessages.map((message) => ({
      x: new Date(message.timeBucket).getTime(),
      y: parseInt(message.count),
    }));

    const channelName = channels.find(
      (channel) => channel.value === generalChannelId
    )?.name;

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
      series: [
        {
          name: channelName,
          type: "spline",
          data: data,
        },
      ],
    };
  },
};

export default engagementHelper;
