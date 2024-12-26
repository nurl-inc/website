import { Box } from 'styled-system/jsx';
import { Text } from './text';

/**
 * This should match the data/sanctum/pricing.json schema
 */
interface PricingCardProps {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: string | number;
  savings: string;
  features: string[];
}

export function PricingCard(props: PricingCardProps) {
  return (
    <Box>
      <Text>{props.name}</Text>
      <Text>{props.description}</Text>
      <Text>{props.monthlyPrice}</Text>
      <Text>{props.annualPrice}</Text>
      <Text>{props.savings}</Text>
      <Text>{props.features.join(', ')}</Text>
    </Box>
  );
}
