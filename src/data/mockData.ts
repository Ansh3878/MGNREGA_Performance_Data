// Mock MGNREGA data for demonstration
export const getMockDistrictData = (districtId: string) => {
  const baseData = {
    totalSpent: Math.floor(Math.random() * 100) + 50,
    workDaysCreated: Math.floor(Math.random() * 50000) + 20000,
    activeWorkers: Math.floor(Math.random() * 10000) + 5000,
    completedProjects: Math.floor(Math.random() * 500) + 200,
    avgWage: Math.floor(Math.random() * 50) + 250,
  };

  return {
    totalSpent: `₹${baseData.totalSpent} करोड़`,
    totalSpentChange: Math.floor(Math.random() * 30) - 10,
    workDaysCreated: baseData.workDaysCreated.toLocaleString('en-IN'),
    workDaysChange: Math.floor(Math.random() * 20) - 5,
    activeWorkers: baseData.activeWorkers.toLocaleString('en-IN'),
    activeWorkersChange: Math.floor(Math.random() * 15) - 5,
    completedProjects: baseData.completedProjects.toLocaleString('en-IN'),
    completedProjectsChange: Math.floor(Math.random() * 25) - 8,
    avgWage: `₹${baseData.avgWage}`,
    avgWageChange: Math.floor(Math.random() * 10) - 3,
  };
};
