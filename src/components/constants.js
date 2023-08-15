export const DATA = [
	{
		id: '1',
		label: 'Food',
		children: [
			{
				id: '2',
				label: 'Meat',
			},
			{
				id: '3',
				label: 'Salad',
				children: [
					{
						id: '4',
						label: 'Tomatoes',
					},
					{
						id: '5',
						label: 'Cabbage',
					},
				],
			},
		],
	},
	{
		id: '6',
		label: 'Drinks',
		children: [
			{
				id: '7',
				label: 'Beer',
			},
			{
				id: '8',
				label: 'Soft drink',
			},
		],
	},
];

export const structure = [
    {
      type: "branch",
      name: "src",
      childrens: [
        {
          type: "branch",
          name: "Components",
          childrens: [
            { type: "leaf", name: "Modal.js" },
            { type: "leaf", name: "Modal.css" }
          ]
        },
        { type: "leaf", name: "index.js" },
        { type: "leaf", name: "index.html" }
      ]
    },
    { type: "leaf", name: "package.json" }
  ];