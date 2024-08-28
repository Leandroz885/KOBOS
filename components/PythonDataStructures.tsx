export const PythonDataStructures: (props: {
  className?: string;
}) => JSX.Element = ({ className }) => {
  return (
    <table className={className}>
      <thead>
        <tr>
          <th>Naam</th>
          <th>Aanpasbaar?</th>
          <th>Geordend?</th>
          <th>Selecteer elementen via</th>
          <th>Toegelaten types voor elementen</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tuple</td>
          <td>❌</td>
          <td>✅</td>
          <td>index</td>
          <td>Alles</td>
        </tr>
        <tr>
          <td>Lijst</td>
          <td>✅</td>
          <td>✅</td>
          <td>index</td>
          <td>Alles</td>
        </tr>
        <tr>
          <td>Dictionary</td>
          <td>✅</td>
          <td>❌(*)</td>
          <td>key</td>
          <td>
            <div>Key: enkel primitieve types</div>
            <div>Value: alles</div>
          </td>
        </tr>
        <tr>
          <td>String</td>
          <td>❌</td>
          <td>✅</td>
          <td>index</td>
          <td>Karakters</td>
        </tr>
      </tbody>
    </table>
  );
};
