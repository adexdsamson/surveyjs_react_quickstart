export const json = {
  title: "Vehicle Insurance Claim Form",
  logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAA…fq62tPdqhQ4eTqB6ifwswABjV9oYOFRV3AAAAAElFTkSuQmCC",
  logoPosition: "right",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "text",
          name: "question1",
          title: "Full Name",
        },
        {
          type: "text",
          name: "question2",
          title: "Policy Number",
        },
        {
          type: "text",
          name: "question3",
          title: "Phone Number",
          inputType: "tel",
        },
        {
          type: "text",
          name: "question4",
          title: "Email Address",
          inputType: "email",
        },
      ],
      title: "Policyholder Information",
    },
    {
      name: "page2",
      elements: [
        {
          type: "text",
          name: "question5",
          title: "Maker",
        },
        {
          type: "text",
          name: "question6",
          title: "Model",
        },
        {
          type: "text",
          name: "question7",
          title: "Year",
          inputType: "date",
        },
        {
          type: "text",
          name: "question8",
          title: "VIN",
        },
        {
          type: "text",
          name: "question9",
          title: "License Plate Number",
        },
      ],
      title: "Vehicle Information",
    },
    {
      name: "page3",
      elements: [
        {
          type: "text",
          name: "question10",
          title: "Date of Accident",
          inputType: "date",
        },
        {
          type: "text",
          name: "question11",
          title: "Time of Accident",
          inputType: "time",
        },
        {
          type: "text",
          name: "question12",
          title: "Location",
        },
        {
          type: "comment",
          name: "question13",
          title: "Brief Description of the accident",
        },
      ],
      title: "Accident Details",
    },
    {
      name: "page4",
      elements: [
        {
          type: "comment",
          name: "question14",
          title: "Describe the Damage to Your Vehicle",
        },
        {
          type: "boolean",
          name: "question15",
          title: "Is the Vehicle Drivable?",
        },
      ],
      title: "Damage Information",
    },
    {
      name: "page5",
      elements: [
        {
          type: "text",
          name: "question16",
          title: "Other Driver's Name",
        },
        {
          type: "text",
          name: "question17",
          title: "Other Vehicle's Maker and Model",
        },
        {
          type: "text",
          name: "question18",
          title: "Other Driver's Insurance Company",
        },
        {
          type: "text",
          name: "question19",
          title: "Policy Number",
        },
      ],
      title: "Other Party Involved (if applicable)",
    },
  ],
};