import { useState } from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import { Button } from '../../../components/Elements/Button/Button';
import { API_URL } from '../../../config';
import { SettingsLayout } from '../components/Layout/SettingsLayout';

type DocOption = {
  name: string;
  url: string;
};
export const SwaggerDocs = () => {
  const options = [
    {
      name: 'Authentication',
      url: '/public/auth.swagger.json',
    },
    {
      name: 'Position',
      url: '/public/position.swagger.json',
    },
  ] as DocOption[];

  const [selectedUrl, setSelectedUrl] = useState<string>(options[0].url);

  const url = new URL(API_URL);
  url.pathname = selectedUrl;

  return (
    <SettingsLayout>
      <div className="flex-1 h-full overflow-y-auto">
        <div>
          <ul className="flex space-x-2">
            {options.map((opt) => (
              <li key={opt.name}>
                <Button onClick={() => setSelectedUrl(opt.url)}>{opt.name}</Button>
              </li>
            ))}
          </ul>
        </div>
        <SwaggerUI url={url.toString()} />
      </div>
    </SettingsLayout>
  );
};
