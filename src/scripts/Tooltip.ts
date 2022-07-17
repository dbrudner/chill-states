type ListItem = { label: string; value: string | number };

const ToolTip = (listItems: ListItem[]): string => `
  <ul>
    ${listItems.map(
      ({ label, value }) =>
        `<li><strong>${label}</strong> - ${value}</li>`
    )}
  </ul>
`;

export default ToolTip;
