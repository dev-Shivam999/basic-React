import { useState } from "react";

const teams = [
  { id: "team1", name: "Team A" },
  { id: "team2", name: "Team B" },
  { id: "team3", name: "Team C" },
];

const judges = [
  { id: "judge1", name: "Judge 1" },
  { id: "judge2", name: "Judge 2" },
  { id: "judge3", name: "Judge 3" },
  { id: "judge4", name: "Judge 4" },
];

export default function AssignJudges() {
  const [assignments, setAssignments] = useState({});

  const handleAssign = (judgeId, selectedTeams) => {
    setAssignments((prev) => ({
      ...prev,
      [judgeId]: selectedTeams,
    }));
  };

  const handleSubmit = async () => {
    const payload = {
      teams: Object.entries(assignments).map(([judgeId, teams]) => ({
        judges_Id: [judgeId],
        teams_id: teams,
      })),
    };

    console.log("Submitting Data:", payload);
    try {
      const response = await fetch("/api/assign-judges", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        alert("Assignments submitted successfully!");
      }
    } catch (error) {
      console.error("Error submitting assignments:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Assign Teams to Judges</h2>
      {judges.map((judge) => (
        <div key={judge.id} className="mb-4">
          <h3 className="font-semibold mb-2">{judge.name}</h3>
          <select
            multiple
            value={assignments[judge.id] || []}
            onChange={(e) =>
              handleAssign(
                judge.id,
                Array.from(e.target.selectedOptions, (option) => option.value)
              )
            }>
            {teams.map((team) => (
              <option key={team.id} value={team.id}>
                {team.name}
              </option>
            ))}
          </select>
        </div>
      ))}
      <button onClick={handleSubmit} className="mt-4">
        Submit Assignments
      </button>
    </div>
  );
}
