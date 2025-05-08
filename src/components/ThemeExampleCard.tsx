import React from 'react';
import { useTheme } from './ThemeProvider';
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export const ThemeExampleCard: React.FC = () => {
  const { theme, currentTheme, toggleTheme } = useTheme();
  
  return (
    <Card className={theme.cardStyles.default}>
      <CardBody>
        <h2 className={theme.headingStyles.h2}>Theme System Example</h2>
        <p className={theme.textStyles.body}>
          This card demonstrates our theming system. Current theme: {currentTheme}
        </p>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className={theme.headingStyles.h3}>Button Styles</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <Button className={`${theme.buttonStyles.primary} ${theme.buttonStyles.sizes.md}`}>
                Primary
              </Button>
              <Button className={`${theme.buttonStyles.secondary} ${theme.buttonStyles.sizes.md}`}>
                Secondary
              </Button>
              <Button className={`${theme.buttonStyles.outline} ${theme.buttonStyles.sizes.md}`}>
                Outline
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className={theme.headingStyles.h3}>Text Styles</h3>
            <p className={theme.textStyles.body}>Regular body text</p>
            <p className={theme.textStyles.body2}>Smaller body text</p>
            <p className={theme.textStyles.caption}>Caption text</p>
            <Link href="/example" className={theme.textStyles.link}>Link text</Link>
          </div>
        </div>
      </CardBody>
      <CardFooter>
        <Button onClick={toggleTheme} className="btn-outline">
          Switch to {currentTheme === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
      </CardFooter>
    </Card>
  );
};