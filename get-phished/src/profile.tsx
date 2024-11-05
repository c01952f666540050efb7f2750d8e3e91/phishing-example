import { useAccount, useEnsName } from 'wagmi';

export function Profile() {
  const { address } = useAccount();
  const { data, error, status } = useEnsName({ address });

  if (status === 'pending') {
    return <div>Loading ENS name</div>
  };

  if (status === 'error') {
    return <div>Error fetching ENS name: {error.name}</div>
  };

  return <div>ENS: {data}</div>;
}
