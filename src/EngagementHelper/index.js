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
      title: {
        text: "Discord server statistics",
      },
      xAxis: {
        type: "datetime",
        title: {
          text: "Date",
        },
        tickInterval: 2, // one wee
      },
      yAxis: {
        title: {
          text: "Number of Messages",
        },
      },
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
