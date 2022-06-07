import type { ReactNode } from 'react';
import { FaInfoCircle } from 'react-icons/fa';

import type { Curriculum } from '~/consts/curriculums';
import { ICON_SIZES } from '~/consts/style';

import * as Styled from './style';

export type TaskDetailProps = Curriculum & {
  children: ReactNode;
};

/**
 * 課題の詳細を表示するコンポーネント
 * @param props {@link DetailProps}
 */
export const TaskDetail = (props: TaskDetailProps) => {
  const { title, description, requirements, example, children } = props;

  return (
    <>
      <Styled.CurriculumTitle>{title}</Styled.CurriculumTitle>

      <Styled.Description>
        {description.split('\n').map((txt) => (
          <p key={txt}>{txt}</p>
        ))}
      </Styled.Description>

      <Styled.RequirementListBox>
        <Styled.RequirementHeading>
          <Styled.RequirementIcon>
            <FaInfoCircle size={ICON_SIZES.L} />
          </Styled.RequirementIcon>
          仕様
        </Styled.RequirementHeading>
        <ul>
          {requirements.map((requirement) => (
            <li key={requirement}>{requirement}</li>
          ))}
        </ul>
      </Styled.RequirementListBox>

      <Styled.Section>
        <Styled.Title>サンプル</Styled.Title>
        <Styled.Contents>{example}</Styled.Contents>
      </Styled.Section>

      <Styled.Section>
        <Styled.Title>実装</Styled.Title>
        <Styled.Annotation>サンプルを参考に実装してください</Styled.Annotation>
        <Styled.Contents>{children}</Styled.Contents>
      </Styled.Section>
    </>
  );
};
