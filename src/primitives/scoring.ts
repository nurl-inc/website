'use server';

export interface BetaRequest {
  companyName: string;
  website?: string;
  name: string;
  email: string;
  role: string;
  currentSystems: string;
  teamSize: 'Solo' | '2-5' | '6-20' | '20+';
  timeline: string;
  currentTools: string;
  challenges: string;
  improvements: string;
  playInterest: string;
  source?: string;
  additionalInfo?: string;
}

export interface QualificationScores {
  sizeScore: number; // 0-10
  timelineScore: number; // 0-10
  integrationScore: number; // 0-10
  totalScore: number; // 0-30
  priority: 'High' | 'Medium' | 'Low';
}

/**
 * Calculate the qualification scores for a beta request.
 * @param request - The beta request data.
 * @returns The qualification scores.
 */
export function calculateQualificationScores(
  request: BetaRequest,
): QualificationScores {
  // Size Score (0-10)
  // Prioritize small to mid-size publishers who will benefit most from our tools
  const sizeScore = calculateSizeScore(request.teamSize);

  // Timeline Score (0-10)
  // Prioritize active projects and near-term development
  const timelineScore = calculateTimelineScore(request.timeline);

  // Integration Score (0-10)
  // Value interest in the complete ecosystem (Play + Sanctum)
  const integrationScore = calculateIntegrationScore(
    request.playInterest,
    request.currentSystems,
    request.improvements,
  );

  const totalScore = sizeScore + timelineScore + integrationScore;

  return {
    sizeScore,
    timelineScore,
    integrationScore,
    totalScore,
    priority: calculatePriority(totalScore),
  };
}

function calculateSizeScore(teamSize: string): number {
  // Optimal size for beta: 2-5 team members
  // These teams are big enough to provide valuable feedback
  // but small enough to be manageable during beta
  switch (teamSize) {
    case 'Solo':
      return 6; // Good but may have limited feedback
    case '2-5':
      return 10; // Ideal size for beta
    case '6-20':
      return 8; // Good but may need more resources
    case '20+':
      return 5; // May be too complex for beta
    default:
      return 0;
  }
}

function calculateTimelineScore(timeline: string): number {
  // Prioritize active projects and near-term development
  switch (timeline.toLowerCase()) {
    case 'current project':
      return 10; // Immediate need and feedback
    case '3-6 months':
      return 8; // Near-term opportunity
    case '6-12 months':
      return 6; // Medium-term planning
    case 'planning phase':
      return 4; // Longer-term opportunity
    default:
      return 0;
  }
}

function calculateIntegrationScore(
  playInterest: string,
  currentSystems: string,
  improvements: string,
): number {
  let score = 0;

  // Interest in Nurl Play integration (0-4 points)
  switch (playInterest.toLowerCase()) {
    case 'yes, immediately':
      score += 4;
      break;
    case 'yes, in future':
      score += 3;
      break;
    case 'need more information':
      score += 2;
      break;
    case 'no':
      score += 0;
      break;
  }

  // Current systems in development (0-3 points)
  // More systems = more potential value
  switch (currentSystems.toLowerCase()) {
    case 'development':
      score += 3;
      break;
    case 'published':
      score += 2;
      break;
    case 'planned':
      score += 1;
      break;
    default:
      score += 0;
      break;
  }

  // Analysis of improvements sought (0-3 points)
  const keyPhrases = [
    'automation',
    'testing',
    'validation',
    'balance',
    'visualization',
    'workflow',
    'integration',
    'feedback',
  ];

  const matchingPhrases = keyPhrases.filter((phrase) =>
    improvements.toLowerCase().includes(phrase),
  );
  score += Math.min(matchingPhrases.length, 3);

  return Math.min(score, 10); // Cap at 10
}

function calculatePriority(totalScore: number): 'High' | 'Medium' | 'Low' {
  if (totalScore >= 25) {
    return 'High';
  } else if (totalScore >= 20) {
    return 'Medium';
  } else {
    return 'Low';
  }
}

// TODO: Implement this

// export async function handleBetaRequest(request: BetaRequest) {
//   const scores = calculateQualificationScores(request);

//   // Optional: Add priority handling
//   switch (scores.priority) {
//     case 'High':
//       // Fast-track response within 24 hours
//       await notifyHighPriorityRequest(request, scores);
//       break;
//     case 'Medium':
//       // Standard response time
//       await notifyTeam(request, scores);
//       break;
//     case 'Low':
//       // May need additional qualification
//       await notifyForQualification(request, scores);
//       break;
//   }

//   return scores;
// }
